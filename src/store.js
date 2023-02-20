import { configureStore, createSlice } from '@reduxjs/toolkit'

let modal = createSlice({
    name: 'modal',
    initialState: { author : '글 삭제 기능',title: '글제목 누르면 해당 글을 모달', date: '따봉 누르면 따봉 증가', text: '정렬 누르면 제목기준으로 정렬' },
    reducers: {
        rememberData(state, action) {
            state.title = action.payload.title
            state.date = action.payload.date
            state.text = action.payload.text
            state.author = action.payload.author
        }
    }
})

let data = createSlice({
    name: 'data',
    initialState: [ // 데이터 가져왔다고 가정
        {
            id:1,
            author: '정호재',
            title: '운중동 다리 및 농구장',
            date: '2023-02-19',
            text: '고등학생때부터 자주 이용하던 농구장으로 장점은 주변에 살고 있는 친구들이 많아 편하게 모일수 있으며, 다리 밑이라 비를 피할 수 있음'
        },
        {
            id:2,
            author: '남기령',
            title: '탄천 옆 야외 농구장',
            date: '2023-01-11',
            text: '분당에 사는 농구 좋아하는 사람들이 많이 가는 농구장으로 장점은 모르는 다양한 사람들과 경쟁하면서 농구할 수 있어 새로운 느낌을 많이 받을 수 있음'
        },
        {
            id:3,
            author: '윤기원',
            title: '낙생 고등학교 실내 농구장 ',
            date: '2023-01-03',
            text: '낙생고등학교와 경기할 때 자주 사용하던 농구장으로 장점은 학교에서 관리하는 농구장이라 시설이 가장 우수하지만 단점으로는 낙생고등학교 홈이라 관중들이 공격적이다 ㅋㅋ'
        },
        {
            id:4,
            author: '정희수',
            title: '탄천종합운동센터 실내 농구장',
            date: '2022-11-29',
            text: '농구에 관심이 많으신 분들이 많이 찾는 곳으로 장점으로는 정말 잘하시는 분들이 많고 기본적인 매너가 다들 좋음'
        },
        {
            id:5,
            author: '김현우',
            title: '운중고 실외 농구장',
            date: '2017-03-29',
            text: '운중고 학생이면 모두 사용가능한 곳으로 쉽게 찾아갈고 편하게 농구할 수 있지만 사용할 수 있는 인원이 적고 본격적으로 농구하기에는 어려움이 많음'
        }],
    reducers: {
        storeData(state, action) {
            if (action.payload) {
                return action.payload
            }
            return state
        }
       
    }
})

export let { storeData } = data.actions
export let { rememberData } = modal.actions


export default configureStore({
    reducer: {
        modal: modal.reducer,
        data: data.reducer
    }
}) 