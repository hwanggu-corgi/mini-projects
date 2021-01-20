export function WorkExpItem(props) {
  return (
    <article>
      <header>
          <div>
              <h3>{props.title}</h3>
              <p>{props.location}</p>
          </div>
          <div>
            <p>{props.date}</p>
          </div>
      </header>
      <ul>
        {props.details.map(detail => <li>{detail}</li>)}
      </ul>
    </article>
  );
}

export function ProjectExpItem(props) {
  return (
    <article>
      <header>
          <div>
              <h3>{props.name}</h3>
              <a href={props.url}>{props.url}</a>
          </div>
          <div>
              <p>{props.date}</p>
          </div>
      </header>
      <ul>
          {props.details.map(detail => <li>{detail}</li>)}
      </ul>
    </article>
  );
}

export function EducationItem(props) {
  return (
    <article>
        <header>
            <div>
                <h3>{props.name}</h3>
                <p>{props.location}</p>
            </div>
            <div>
              <p>{props.date}</p>
            </div>
        </header>
    </article>
  );
}

