import { useEffect, useState } from 'react';

import * as S from './Todo.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import ComponentLayout from '../layout/ComponentLayout';
import InitialText from '../atoms/InitialText';

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

	const handleDeleteAll = () => {
		setList([]);
	};

	return (
		<ComponentLayout component='todo'>
			<S.InputBox>
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
			</S.InputBox>
			<S.ListBox>
				{list.length === 0 ? (
					<InitialText>
						<p>
							아직 할 일을 등록하지 않으셨군요? <br />
							오늘의 할 일 리스트를 작성해보세요.
						</p>
					</InitialText>
				) : (
					list.map((item) => (
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
					))
				)}
			</S.ListBox>
			<S.deleteAllButtonWrap>
				<S.DeleteAllButton onClick={handleDeleteAll}>
					전체 삭제
				</S.DeleteAllButton>
			</S.deleteAllButtonWrap>
		</ComponentLayout>
	);
};

export default ToDo;
