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