import React from 'react';
import { Tooltip, Icon } from 'rubix';

const branchUrl = 'https://github.com/rubix-design/rubix-design/blob/master/';

export default function EditButton({ title, filename }) {
  return (
    <Tooltip title={title}>
      <a className="edit-button" href={`${branchUrl}${filename}`}>
        <Icon type="edit" />
      </a>
    </Tooltip>
  );
}
