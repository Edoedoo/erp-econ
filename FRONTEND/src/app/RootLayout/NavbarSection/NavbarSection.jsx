

function NavbarSection({ dataUI }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            background: "var(--color-bg-menu)",
            padding: "10px 10px"
        }}>
            <div style={{
                display: "flex",
                minHeight: "50px"
            }}>
                <div style={{
                    display: "flex",
                    flex: "1",
                    color: "var(--color-accent)"
                }}> <h4></h4> </div>

                <div style={{
                    display: "flex",
                    justifyContent: "end",
                    fontSize: "13px"
                }}>top navbar right</div>
            </div>

            <div style={{
                display: "flex",
                minHeight: "50px",
                fontSize: "14px"
            }}>
                <div style={{
                    display: "flex",
                    flex: "1"
                }}><span>midle navbar left</span></div>
                <div style={{
                    display: "flex",
                    justifyContent: "end"
                }}><span>midle navbar right</span></div>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                fontSize: "14px"
            }}>
                <div style={{
                    color: "var(--color-accent)"
                }}><h4>bottom navbar left</h4></div>
                <div style={{
                    fontSize: "13px"
                }}><span>bottom navbar center</span></div>
                <div style={{
                    fontSize: "13px"
                }}
                ><span>bottom navbar right</span></div>
            </div>
        </div>
    )
}

export default NavbarSection