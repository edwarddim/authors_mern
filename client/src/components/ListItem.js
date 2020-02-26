import React from 'react'
import { Link } from '@reach/router';

const ListItem = (props) =>{
    const {author} = props;
    return(
        <tr>
            <td>{author.name}</td>
            <td>
                <Link to={"/authors/"+author._id+"/edit"}>
                    Edit
                </Link>
            </td>
        </tr>
    )

}
export default ListItem