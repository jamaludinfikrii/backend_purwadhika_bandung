import React from 'react';
import './App.css';
import Axios from 'axios'

class App extends React.Component{
  state= {
    data :  null,
    showEditForm : false,
    selectedEdit : null
  }
  componentDidMount(){
    this.getAllDataGuru()
  }

  getAllDataGuru = () =>{
    Axios.get('http://localhost:4000/guru/getdataguru')
    .then((res) => {
      this.setState({data : res.data.data})
      console.log(res.data.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }


  onDeleteBtnClick = (id) => {

    // save response di postman
    // bikin on delete btn click

    if(window.confirm('Are You Sure Want To Delete This Data??')){
      Axios.delete('http://localhost:4000/guru/deletegurubyid/' + id)
      .then((res) => {
        alert(res.data.message)
        this.setState({data : res.data.data})
      })
    }
  }

  onBtnSaveClick = () => {
    let nama = this.refs.nama.value
    let umur = this.refs.umur.value
    let gender = this.refs.gender.value

    let data = {}

    if(nama) data.nama = nama
    if(umur) data.umur = Number(umur)
    if(gender) data.gender = gender

    Axios.patch('http://localhost:4000/guru/editdataguru/' + this.state.selectedEdit.id , data)
    .then((res) => {
      alert(res.data.message)
    })
    .catch((err) => {
      console.log(err)
    })
    
  }

  render(){
    return(
      <div>
        <h1>Data Guru di Sekolahku</h1>
        {
          <ul>
            {
              this.state.data === null ? <p>Loading ....</p> :
              this.state.data.map((val) => {
                return(
                <li key={val.id}>
                  {val.nama} 
                   ~ <span style={{color : "blue",cursor:'pointer'}} onClick={() => this.setState({showEditForm : true,selectedEdit : val})}>Edit</span>
                   || <span style={{color : "blue",cursor:'pointer'}} onClick={() => this.onDeleteBtnClick(val.id)}>Delete</span>
                   || <span style={{color : "blue",cursor:'pointer'}}>Detail</span>
                </li>
                )
              })
            }
            
          </ul>
        }
        
        {
          this.state.showEditForm &&
            <div>
              <input type='text' placeholder={this.state.selectedEdit.nama} ref='nama'/>
              <input type='number' placeholder={this.state.selectedEdit.umur} ref='umur'/>
              <input type='text' placeholder={this.state.selectedEdit.gender} ref='gender'/>
              <input type='button' onClick={this.onBtnSaveClick} value = 'save' />
              <input type='button' onClick={() => {this.setState({showEditForm : false})}} value = 'cancel' />
            </div>
        }
      </div>
    )
  }
}

export default App;
