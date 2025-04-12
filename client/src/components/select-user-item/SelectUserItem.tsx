import { ISelectUserItemProps } from "./types.ts";
import { UserPhoto } from "../user-photo/UserPhoto.tsx";
import { SelectUserItemStyled } from "./select-user-item.styled.ts";

//Компонент для Селекта показывающий имя пользователя и его аватар
export const SelectUserItem = ({
  userName,
  userImgUrl,
}: ISelectUserItemProps) => {
  return (
    <SelectUserItemStyled>
      <span>{userName ?? ""}</span>
      <UserPhoto userImgUrl={userImgUrl}></UserPhoto>
    </SelectUserItemStyled>
  );
};
