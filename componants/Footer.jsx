export const Footer = (props) => {
    return (
    <div className="mt-3">
        <p className="text-secondary text-center">
          copyright © {props.year} {props.name} {props.stu_id}
        </p>
    </div>);
};