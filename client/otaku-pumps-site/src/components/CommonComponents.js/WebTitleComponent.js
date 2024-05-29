import React from 'react';
import { SLOGAN } from '../../helpers/constants';

export function WebTitleComponent({user,theme,welcome,fontSize}) {
  return (
    <div>
        <h1 style = {{
            color: `${theme.font}`,
            fontFamily: 'Bangers',
            padding: '0',
            margin: '0',
            fontSize: `${fontSize}em`,
        }}>
            {welcome ? `Welcome to `: null}<span style = {{color: theme.color}}>Otaku Pumps </span>
            {user ? <span>{user.userName}</span> : null}
        </h1>
        <h4 style = {{
            marginTop: '0'
        }}>{SLOGAN}</h4>
    </div>
  )
}
