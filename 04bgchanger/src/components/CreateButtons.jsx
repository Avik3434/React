function CreateButtons({setColor}) {

    const buttons = ['Cyan', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink', 'Black', 'White']

    return buttons.map((btncolor) => {

        return (
            <button
                key={btncolor}
                onClick={() => setColor(btncolor)}
                className="outline-none px-4 py-1 shadow-lg rounded-full cursor-pointer"
                style={{
                    backgroundColor: btncolor,
                    color: btncolor === 'Black' ? 'white' : 'Black'
                }}
            >
                btncolor
            </button>
        )
    }
    )
}

export default CreateButtons