import Button from '@atlaskit/button';
import React from 'react';
import styled, { css } from 'styled-components';
import CheckIcon from '@atlaskit/icon/glyph/check';

const ButtonStyled = styled(Button)`
    margin-top: 5px;
    text-align: left;

    &, &:hover {
        ${(p) => p.iscompleted && 
            css`
                text-decoration: line-through;
            `}
    }

    &:hover {
       .check-icon {
           display: inline-block;
       }
    }
    .check-icon {
        display: none;

        &:hover {
            background-color: #e2e2e2;
            border-radius: 2px;
        }
    }
`;

export default function ToDo({todo, onCheckButtonClick}) {
    return (
        <ButtonStyled 
            iscompleted={todo.isCompleted}
            shouldFitContainer
            iconAfter={!todo.isCompleted && (<span className="check-icon" onClick={() => onCheckButtonClick(todo.id)}><CheckIcon primaryColor="#4fff4f" /></span>)}
            >
            {todo.name}
        </ButtonStyled>
    );
}