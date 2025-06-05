interface IProfilePic {
    src: string;
}

export const ProfilePic = (props: IProfilePic) => (
    <img src={props.src} className="max-w-[40vw] max-h-[50vh] rounded" />
);
