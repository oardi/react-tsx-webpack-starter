import { useState } from 'react';

interface IButtonCounterProps {
	name: string;
	onClicked?: (e: number) => void;
}

export const ButtonCounter = ({ name, onClicked }: IButtonCounterProps): JSX.Element => {
	const [count, setCount] = useState<number>(0);

	const handleClick = (): void => {
		setCount(count + 1);
		onClicked && onClicked(count);
	};

	return (
		<button onClick={(): void => handleClick()} className="btn btn-primary">
			{name} - You clicked me {count} times
		</button>
	);
};
