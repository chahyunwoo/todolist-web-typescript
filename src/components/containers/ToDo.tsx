import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@material-tailwind/react';

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

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
			<div className="p-5 flex h-[75px]">
				<input
					type='text'
					placeholder='할 일을 입력하세요.'
					value={value}
					onChange={handleInputChange}
					onKeyDown={handleKeyDown}
					className="appearance-none bg-transparent outline-none text-white cursor-pointer leading-5 border-b border-white tracking-wider w-full placeholder:opacity-100 placeholder:visible placeholder:transition-all placeholder:duration-500 focus:placeholder:opacity-0 focus:placeholder:invisible"
				/>
				<Button
					color='green'
					size='lg'
					onClick={handleButtonClick}
					className="py-2 rounded-[2px] ml-2.5 w-10"
					placeholder=""
					onPointerEnterCapture={() => {}}
					onPointerLeaveCapture={() => {}}
					onResize={() => {}}
					onResizeCapture={() => {}}
				>
					<FontAwesomeIcon icon={faPen} size='xl' />
				</Button>
			</div>
			<ul className="w-full px-5 block overflow-y-auto mobile:h-[400px] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-button]:h-[2px] [&::-webkit-scrollbar-thumb]:bg-white/10" style={{ height: 'calc(100% - 115px)' }}>
				{list.length === 0 ? (
					<InitialText>
						<p>
							아직 할 일을 등록하지 않으셨군요? <br />
							오늘의 할 일 리스트를 작성해보세요.
						</p>
					</InitialText>
				) : (
					list.map((item) => (
						<li key={item.id} className="w-full px-2 py-4 flex border-b border-white/30 justify-between last:border-none">
							<span
								onClick={() => handleListClick(item.id)}
								className={`max-w-[90%] break-words leading-[1.4] cursor-pointer transition-colors duration-[350ms] ${
									item.done ? 'text-[#4cd137]' : 'text-white'
								}`}
							>
								{item.text}
							</span>
							<button onClick={() => handleDelete(item.id)}>
								<FontAwesomeIcon
									icon={faTrash}
									size='xs'
									style={{ color: 'rgba(255, 255, 255, 0.5)' }}
								/>
							</button>
						</li>
					))
				)}
			</ul>
			<div className="w-full border-t border-white/50 text-center mt-auto h-10 leading-10">
				<button onClick={handleDeleteAll} className="cursor-pointer transition-all duration-500 text-white hover:text-[crimson]">
					전체 삭제
				</button>
			</div>
		</ComponentLayout>
	);
};

export default ToDo;
