import './button.css'
export function Button({content,customClass}) {
    return (
        <>
            <button className={customClass}>
                {content}
            </button>
        </>
    );
}