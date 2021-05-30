import React, { useRef, useState } from 'react'

export const EventsExample: React.FC = () => {
	const [value, setValue] = useState<string>('')
	const [isDrag, setIsDrag] = useState<boolean>(false)
	const inputRef = useRef<HTMLInputElement>(null)
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}
	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(inputRef.current?.value)
	}
	const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
		console.log('drag')
	}
	const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(true)

	}
	const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(false)

	}
	const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(false)
		console.log('drop')

	}

	return (
		<div>
			<input value={value} onChange={changeHandler} type="text" placeholder='Управляемый' />
			<input type="text" placeholder='Неуправляемый' ref={inputRef} />
			<button onClick={clickHandler}>asdfadf</button>
			<div style={{ width: 200, height: 200, background: 'red' }} draggable onDrag={dragHandler}></div>
			<div style={{ width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 15 }} onDrop={dropHandler} onDragLeave={leaveHandler}
				onDragOver={dragWithPreventHandler}
			></div>
		</div>
	)
}
