import SingleProject from "../components/SingleProject";
import projects from "../constants/data/projects";

export default function Projects() {
  const outbox = 420 * projects.length;

  return (
    <div>
      <h1 className="text-center text-4xl font-medium mt-20 mb-10">
        Featured Projects
      </h1>

      <section className={`relative h-[${outbox}]px`}>
        {projects?.map((item) => {
          return (
              <SingleProject
              key={item.head}
                head={item.head}
                data={item.data}
                preview={item.preview}
                source={item.source}
                img={item.img}
              />
          );
        })}
      </section>
    </div>
  );
}
