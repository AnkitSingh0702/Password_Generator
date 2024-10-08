// import { IoCopyOutline } from "react-icons/io5";
// import React from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"

// function Textinput() {
//   return (
//     <div className="flex w-full max-w-sm items-center space-x-2">
//       <Input type="email" placeholder="Generated Password" />
//       <Button type="submit"><IoCopyOutline/></Button>
//     </div>
//   )
// }

// export default Textinput

import { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import Icon from "../components/ui/icon";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    password: string
    setPassword: (value: string) => void
    onSave?: (value: any) => Promise<void>
}

export function Textinput({ password, setPassword, onSave, ...props }: TextFieldProps) {
    const [editMode, setEditMode] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null);
    const editBtnRef = useRef<HTMLButtonElement>(null);

    const openEditMode = () => {
        setEditMode(true)
    }

    const onEditHandler = async () => {
        const currentValue = inputRef?.current?.value;

        const onSavePromise = await onSave?.(currentValue);

        setEditMode(false)
        editBtnRef?.current?.focus();

        return onSavePromise;
    }

    useEffect(() => {
        if (!editMode) {
            return;
        };

        inputRef?.current?.focus()
    }, [editMode])

    return (
        <div className="flex gap-2">
            <Input {...props} readOnly={!editMode} ref={inputRef} type="text"
                value={password} maxLength={20} disabled={!editMode}
                onChange={(e) => setPassword(e.target.value.replace(/\s/g, ''))}
                className="font-semibold tracking-widest w-[32.5rem] "
            />
            {/* <Button
                variant="outline"
                size="icon"
                ref={editBtnRef}
                onClick={editMode ? onEditHandler : openEditMode}
            >
                {editMode ? <Icon.check className="w-4 h-4" /> : <Icon.pencil className="w-4 h-4" />}
            </Button> */}
        </div>
    )
}