import { ISelectUserItemProps } from "./types.ts";

export const SelectUserItem = ({
  userName,
  userImgUrl,
}: ISelectUserItemProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>{userName ?? ""}</span>
      <img
        src={userImgUrl ?? ""}
        alt="photo"
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
        }}
      />
    </div>
  );
};
