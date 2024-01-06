import { useDispatch, useSelector } from "react-redux";
import styled from  "styled-components";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {removeUser} from '../../store/slices/UserSlices';

const DisplayUsers=()=>{

    const dispatch= useDispatch();

    const data = useSelector((state)=>{
        return state.users;
    })

    const deleteUser=(id)=>{
        dispatch(removeUser(id))
    }
    return(
    <Wrapper>
   {
    data.map((user, id)=>{
        return(
            <li key={id}>
            {user}
            <FontAwesomeIcon className="dlt-icon" icon={faTrash} onClick={()=> deleteUser(id)}/>
            </li>
        )
    })
   }
    </Wrapper>)
}

const Wrapper = styled.section`
li{
    width:100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:1rem;
    border-bootom: 1px solid #eee;
    &:first-child{
    border-top: 1px solid #eee;
    }
    .dlt-icon{
        cursor: pointer;
        padding: 10px;
    }
}    
`

export default DisplayUsers;