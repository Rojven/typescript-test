import { ReactNode } from 'react';

interface ListProps<T> {
    //T - может быть любым типом
    items: T[];
    renderItems: (item: T) => ReactNode
}

export default function List<T>(props: ListProps<T>) {
    return (
        <div>
            {props.items.map(props.renderItems)}
        </div>
    )
}
