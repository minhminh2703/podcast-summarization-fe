type AuthTabProps = {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export default function CustomTabPanel(props: AuthTabProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            style={{ padding: 20, paddingLeft: 30, paddingRight: 30 }}
        >
            {value === index && <div>{children}</div>}
        </div>
    );
}