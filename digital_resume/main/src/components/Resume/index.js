

export function EducationItem(props) {
  const name = props.name;
  const location = props.location;
  return (
    <article>
        <header>
            <section>
                <h3>{props.name}</h3>
                <p>{props.location}</p>
            </section>
            <section>
            <p>{props.date}</p>
            </section>
        </header>
    </article>
  );
}

export default App;
