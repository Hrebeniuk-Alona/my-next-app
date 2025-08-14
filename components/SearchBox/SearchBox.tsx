import css from "../SearchBox/SearchBox.module.css"


interface SearchBoxProps{
    onChange: (query: string) => void,
    value: string;
}


export default function SearchBox({ onChange, value }: SearchBoxProps) {

    return (
        <>
            <input
             className={css.input}
             type="text"
             value={value}
             onChange={(e)=>onChange(e.target.value.trim())}
                placeholder="Search notes" />
    </>    )
   

}