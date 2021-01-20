

export function EducationItem(props) {
  const name = props.name;
  const location = props.location;
  return (
    <article>
        <header>
            <section>
                <h3>{props.name}</h3>
                <p>Team Treehouse, Vancouver, BC</p>
            </section>
            <section>
                <p>January 2019 - September 2019</p>
            </section>
        </header>
    </article>
  );
}

export default App;
