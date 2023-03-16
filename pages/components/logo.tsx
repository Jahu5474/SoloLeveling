import React from 'react';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Link from 'next/link'
import Image from 'next/image';


const LogoBox = styled.span`
 font-weight: bold;
 font-size: 18px;
 display: inline-flex;
 align-items: center;
 height: 30px;
 line-height: 20px;
 padding: 10px;
`

function Logo (){

    return(
        <Link href="/" legacyBehavior>
            <a>
                <LogoBox>
                    <Text
                        fontWeight="bold"
                    >
                        Sung Jinwoo Wiki
                    </Text>
                </LogoBox>

            </a>
        </Link>
    )
}

export default Logo