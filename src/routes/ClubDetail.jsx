import React, { useState } from 'react';
import { DeatailWrap } from '../components/Introduction/styles';
import { BoothMainImage } from '../components/Introduction/styles';
import ClubPage from '../components/Introduction/ClubPage';
import { useNavigate } from 'react-router-dom';
import MainButton from '../components/Main/MainButton';
import { Box } from '@mui/material';
import Logo from '../assets/images/Logo.png';
import { LogoButton } from '../components/Booth/BoothStyled';
import Navigation from '../components/Nav/Navigation';

const ClubDetail = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const navigate = useNavigate();
  // 카드데이터
  const club = {
    id: 1,
    main_image:
      'https://velog.velcdn.com/images/seochan99/post/b414d9f0-5adf-49f2-a50b-c8a0ad3a3278/image.jpeg',
    title: '멋쟁이사자처럼',
    logo: 'https://velog.velcdn.com/images/seochan99/post/3dc61517-baf1-4636-b514-f24910076286/image.jpeg',
    hashtag: '#코딩 #창업',
    roomLocation: '학생회관 2층 작은 문',
    boothLocation: '목 20번, 금 10번',
    introduce: '안녕하세요 멋쟁이사자처럼입니다.\nPossibility to Reality',
    activity: '1년동안 코딩만 주구장창 해요 ^_^',
    recruit: '모집대상~',
    boothLocation: '목요일 금요일 만해광장에서 만나요~~!',
    inquiry: ['010-1234-1234', '@dgulikelion'],
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '10vh',
        }}
      >
        <Navigation />
      </Box>
      <DeatailWrap>
        <ClubPage club={club} />
      </DeatailWrap>
    </>
  );
};

export default ClubDetail;