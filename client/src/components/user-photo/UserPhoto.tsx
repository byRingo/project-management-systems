import { IUserPhotoProps } from "./types.ts";

export const UserPhoto = ({
  userImgUrl,
  width = "20px",
  height = "20px",
}: IUserPhotoProps) => {
  return (
    <img
      src={userImgUrl ?? ""}
      alt="userPic"
      style={{
        width: width,
        height: height,
        borderRadius: "50%",
      }}
    />
  );
};
