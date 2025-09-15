import React from "react";
import { Avatar, ButtonBase } from "@mui/material";

type AvatarUploadProps = {
  value?: File | null;             
  onChange: (file: File | null) => void;  
};

export default function AvatarUpload({ value, onChange }: AvatarUploadProps) {
  const [preview, setPreview] = React.useState<string | undefined>(
    value ? URL.createObjectURL(value) : undefined
  );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onChange(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setPreview(value ? URL.createObjectURL(value) : undefined);
    }
  };

  return (
    <ButtonBase component="label">
      <Avatar
        alt="Upload avatar"
        src={preview}
        sx={{ width: 150, height: 150 }}
      />
      <input
        type="file"
        accept="image/*"
        hidden
        onChange={handleFileChange}
      />
    </ButtonBase>
  );
}
