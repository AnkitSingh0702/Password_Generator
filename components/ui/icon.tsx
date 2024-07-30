import { CheckIcon, CopyIcon, Cross1Icon, Pencil1Icon, ShuffleIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";

const Icon = {
    copy: CopyIcon,
    pencil: Pencil1Icon,
    shuffle: ShuffleIcon,
    cross: Cross1Icon,
    check: CheckIcon,
}

export type IconName = keyof typeof Icon

export default Icon