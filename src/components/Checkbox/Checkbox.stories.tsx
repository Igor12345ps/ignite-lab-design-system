import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {
        text: "Lembrar-me de mim"
    },
    argTypes: {},
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}