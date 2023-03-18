import { useEffect, useState } from 'react';

import * as S from '../styles/components/ToDoStyle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface IListItem {
	id: number;
	text: string;
	done: boolean;
}

const ToDo: React.FC = () => {
	const [list, setList] = useState<IListItem[]>([]);
	const [value, setValue] = useState<string>('');

	useEffect(() => {
		const storedList = localStorage.getItem('todoList');

		if (storedList) {
			setList(JSON.parse(storedList));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('todoList', JSON.stringify(list));
	}, [list]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const handleListClick = (id: number) => {
		setList((prevList) =>
			prevList.map((item) =>
				item.id === id ? { ...item, done: !item.done } : item
			)
		);
	};

	const handleButtonClick = () => {
		if (value.trim()) {
			const newItem: IListItem = {
				id: new Date().getTime(),
				text: value,
				done: false,
			};

			setList((prev) => [...prev, newItem]);
			setValue('');
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleButtonClick();
		}
	};

	const handleDelete = (index: number) => {
		setList((prevList) => prevList.filter((item) => item.id !== index));
	};

	return (
		<S.ToDoBox>
			<S.Input
				type='text'
				placeholder='할 일을 입력하세요.'
				value={value}
				onChange={handleInputChange}
				onKeyPress={handleKeyPress}
			/>
			<S.AddButton color='green' size='lg' onClick={handleButtonClick}>
				<FontAwesomeIcon icon={faPen} size='xl' />
			</S.AddButton>
			<S.ListBox>
				{list.map((item) => (
					<S.List key={item.id}>
						<S.Span onClick={() => handleListClick(item.id)} done={item.done}>
							{item.text}
						</S.Span>
						<button onClick={() => handleDelete(item.id)}>
							<FontAwesomeIcon
								icon={faTrash}
								size='xs'
								style={{ color: 'rgba(255, 255, 255, 0.5)' }}
							/>
						</button>
					</S.List>
				))}
			</S.ListBox>
		</S.ToDoBox>
	);
};

export default ToDo;
