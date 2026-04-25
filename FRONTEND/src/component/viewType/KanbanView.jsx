function KanbanView({ data, config }) {
    return (
      <div className="kanban">
  
        {data.map((row, i) => (
          <div className="kanban-card" key={i}>
            
            <div className="kanban-title">
              {config.title.render
                ? config.title.render(row)
                : row[config.title.key]}
            </div>
  
            <div className="kanban-subtitle">
              {config.subtitle.render
                ? config.subtitle.render(row)
                : row[config.subtitle.key]}
            </div>
  
            <div className="kanban-body">
              {config.fields.map(column => (
                <div key={column.key}>
                  {column.render
                    ? column.render(row)
                    : row[column.key]}
                </div>
              ))}
            </div>
  
          </div>
        ))}
  
      </div>
    )
  }

  export default KanbanView