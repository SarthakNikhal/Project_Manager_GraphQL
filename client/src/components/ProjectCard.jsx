
export default function ProjectCard( {project} ) {
  return (
    <div className="col-md-6">
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title">
                        {project.name}
                        <span className="badge bg-secondary ms-2">{project.status}</span>
                    </h5>

                    <a href={`/projects/${project.id}`} className="btn btn-light">
                    View
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
