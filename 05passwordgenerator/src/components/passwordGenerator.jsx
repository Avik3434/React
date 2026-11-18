import { useState, useCallback, useEffect, useRef } from 'react'

function PasswordGenerator() {

    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [characterAllowed, setCharacterAllowed] = useState(false)
    const [password, setPassword] = useState("")

    const passwordRef = useRef(null)

    // takes dependencies and function inside useCallback(fn, dep)
    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvexyz"
        if (numberAllowed) str += "0123456789"
        if (characterAllowed) str += "!@#$%|?&*()_{}[]"
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
            // console.log(pass)
        }

        setPassword(pass)

    }, [numberAllowed, characterAllowed, length])

    const passwordCopyToClipboard = useCallback(() => {
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0, password.length)
        window.navigator.clipboard.writeText(password)
    }, [password])

    useEffect(() => {
        passwordGenerator()
    }, [length, numberAllowed, characterAllowed])
    return (
        <>
            <div className='w-full max-w-3xl mx-auto shadow-md rounded-3xl px-7 py-7 text-center text-4xl my-6 text-orange-500 bg-gray-700 justify-center items-center'>
                <h1 className="text-3xl font-bold text-white mb-3">
                    Password Generator
                </h1>
                <div
                    className='flex shadow rounded-lg overflow-hidden mb-4'
                >
                    <input type='text'
                        value={password}
                        className='bg-white outline-none w-full py-3 px-4 h-18 '
                        placeholder='password'
                        ref={passwordRef}
                        readOnly
                    />
                    <button
                        onClick={passwordCopyToClipboard}
                        class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 shadow rounded-r-lg cursor-pointer">
                        Copy
                    </button>
                </div>
                <div className="flex items-center justify-between gap-6 w-full text-white">

                    <div className="flex items-center gap-3 text-lg flex-1">
                        <input
                            type="range"
                            min={6}
                            max={32}
                            value={length}
                            className="w-full cursor-pointer accent-orange-500"
                            onChange={(e) => setLength(Number(e.target.value))}
                        />
                        <label className="whitespace-nowrap font-medium">
                            Length: {length}
                        </label>
                    </div>

                    <div className="flex items-center gap-2 whitespace-nowrap">
                        <input
                            type="checkbox"
                            defaultChecked={numberAllowed}
                            id="numberInput"
                            onChange={() => setNumberAllowed((prev) => !prev)}
                        />
                        <label className='text-xl' htmlFor="numberInput">Numbers</label>
                    </div>
                    <div className="flex items-center gap-2 whitespace-nowrap">
                        <input
                            type="checkbox"
                            defaultChecked={characterAllowed}
                            id="charactersInput"
                            onChange={() => setCharacterAllowed((prev) => !prev)}
                        />
                        <label className='text-xl' htmlFor="charactersInput">Characters</label>
                    </div>


                </div>

            </div>
        </>
    )

}

export default PasswordGenerator;