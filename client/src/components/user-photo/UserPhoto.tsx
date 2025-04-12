import { IUserPhotoProps } from "./types.ts";

//Компонент фотографии пользователя
export const UserPhoto = ({
  userImgUrl,
  width = "1.25rem",
  height = "1.25rem",
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
