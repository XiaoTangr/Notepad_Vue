import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNoteData = defineStore('NoteData', () => {


  // 定义添加项目页面的状态
  const isAdding = ref(false)

  // 更新状态
  const toggleAdding = () => {
    isAdding.value = !isAdding.value
  }
  // 定义需要持久化的数据
  const Data = ref({
    SiteTitle: "Note App",
    Auther: "G22计应七班-唐志平-202211052",
    BGImgList: [{ url: "@/assets/images/bg.jpg", type: "init" }],
    NoteList: [
      {
        Title: 'Title',
        CreateDate: '2024年4月3日',
        Content: '没有内容'
      }
    ]
  })

  /**
   * get Auther info
   * @returns Auther Info
   */
  const getAuther = () => {
    return Data.value.Auther
  }
  const AddNote = (note: { Title: string; CreateDate: string; Content: string }) => {
    Data.value.NoteList.push({
      Title: note.Title,
      CreateDate: note.CreateDate,
      Content: note.Content
    })
    // saveToLocalStorage();
  }

  /**
   * Drop All Note
   */
  const DropAllNote = () => {
    Data.value.NoteList = []
    // saveToLocalStorage();
  }

  /**
   * Drop One Note
   * @param index the index of ArrayList
   */
  const DropOneNote = (index: number) => {
    Data.value.NoteList.splice(index, 1)
    // saveToLocalStorage();
  }

  /**
   * update BGImgList of Data
   * @returns void
   */
  const PushBG = (urls: { url: string; type: string }) => {
    if (Data.value.BGImgList[0].type === "init") {
      Data.value.BGImgList = []
    }
    Data.value.BGImgList.push(urls);
  }


  /**
   * get img url
   * @returns string of img url
   */
  const GetImgUrl = () => {
    if (Data.value.BGImgList.length === 1) {
      return Data.value.BGImgList[0].url
    } else {
      const randomIndex = Math.floor(Math.random() * Data.value.BGImgList.length);
      console.log(Data.value.BGImgList[randomIndex].url)
      return Data.value.BGImgList[randomIndex].url
    }
  }

  /**
   * load data from localStorage
   */
  const loadFromLocalStorage = () => {
    console.log("Loading data from localStorage")
    Data.value.NoteList = []
    let localData = localStorage.getItem('Data');
    if (localData) {
      Data.value = JSON.parse(localData);
    }
  }

  /**
   * save data to localStorage
   */
  const saveToLocalStorage = () => {
    console.log("Saving data to localStorage")
    localStorage.setItem('Data', JSON.stringify(Data.value));
  }
  return { isAdding, toggleAdding, Data, getAuther, GetImgUrl, AddNote, DropAllNote, DropOneNote, loadFromLocalStorage, saveToLocalStorage, PushBG }
})
