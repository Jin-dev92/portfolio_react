import React from 'react';
import styled from "styled-components";
import {UserListComponent} from "../components/netflix/components/UserListComponent";
import {useSelector} from "react-redux";
import NetflixBody from "../components/netflix/NetflixBody";
import NetflixHeader from "../components/netflix/NetflixHeader";
import NetflixFooter from "../components/netflix/NetflixFooter";
import {SuspenseComponent} from "../components/common/SuspenseComponent";


const NetflixHomeContainer = styled.main`
  height: 100vh;
`
const Netflix = () => {
    const currentUser = useSelector(state => state.userSlice.currentUser)
    return (
        <NetflixHomeContainer>
            {
                currentUser ?
                    (
                        <SuspenseComponent>
                            <NetflixHeader/>
                            <NetflixBody/>
                            <NetflixFooter/>
                        </SuspenseComponent>

                    ) : (
                        <UserListComponent/>
                    )
            }

        </NetflixHomeContainer>
    )
}

export default Netflix