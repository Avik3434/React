import {useId} from 'react'

function InputBox({
	label,
	amount,
	onAmountChange,
	onCurrencyChange,
	currencyOptions = [],
	selectCurrency = 'usd',
	amountDisabled = false,
	currencyDisabled = false,
	className = "",
}) {
	const amountInputId = useId()
	return (
		<div className={`bg-white p-6 rounded-xl text-lg w-full flex ${className}`}>
			<div className="w-1/2">
				<label htmlFor={amountInputId} className="text-black/40 mb-3 inline-block text-base">
					{label}
				</label>
				<input
					id={amountInputId}
					className="outline-none w-full bg-transparent py-2.5 text-xl font-medium"
					type="number"
					placeholder="Amount"
					disabled={amountDisabled}
					value={amount}
					onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
				/>
			</div>
			<div className="w-1/2 flex flex-wrap justify-end text-right">
				<p className="text-black/40 mb-3 w-full text-base">Currency Type</p>
				<select
					className="rounded-lg px-3 py-2 bg-gray-100 cursor-pointer outline-none text-lg"
					value={selectCurrency}
					onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
					disabled={currencyDisabled}
				>
					{currencyOptions.map((cur) => (
						<option key={cur} value={cur}>
							{cur}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default InputBox