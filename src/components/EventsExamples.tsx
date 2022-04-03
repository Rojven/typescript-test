import { ChangeEvent, FC, useState, MouseEvent, DragEvent, useRef } from 'react';


const EventsExamples: FC = () => {

    const [value, setValue] = useState<string>('');
    const [isDraged, setIsDraged] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const onHandleClick = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(value);
        console.log(inputRef.current?.value);
    }

    const onHandleDrag = (e: DragEvent<HTMLDivElement>) => {
        console.log('drag');
    }

    const onHandleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDraged(false);
        console.log('droped');
    }

    const onHandleOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDraged(true);
    }

    const onHandleLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDraged(false);
    }

    return (
        <div>
            <input 
                value={value} 
                type="text" 
                onChange={onHandleChange}
                placeholder='controlled'
            />
            <input 
                ref={inputRef}
                type="text" 
                placeholder='uncontrolled'
            />
            <button 
                onClick={onHandleClick}
            >
                Click
            </button>
            <div 
                style={{width: 200, height: 200, background: 'red'}}
                draggable
                onDrag={onHandleDrag}
            />
            <div 
                style={{width: 200, height: 200, background: isDraged ?'red': 'grey', marginTop: 15}}
                onDrop={onHandleDrop}
                onDragLeave={onHandleLeave}
                onDragOver={onHandleOver}
            />
        </div>
    )
}

export default EventsExamples;