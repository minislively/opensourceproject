// import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import axios from "axios";
// import $ from 'jquery';

import React from 'react'

function NoticeSub() {
  return (
    <div>NoticeSub</div>
  )
}

export default NoticeSub

// class SoftwareView extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             responseSwtoolInfo: '',//swtool 정보 response 변수
//             append_SwtoolInfo: '', //swtool 정보 append 변수

//             //파일, 이미지 업로드
//             file: '',//메인 이미지 미리보기용 path
//             file2: '',//라벨 이미지 미리보기용 path
//             fileName: '',//메인 이미지명
//             fileName2: '',//라벨 이미지명
//             menualName: '',//메뉴얼명
//             selectedFile: null, //업로드 대상 파일
//         }
//     }
//     componentDidMount () {
//         // SW Tool 정보 호출
//         this.callSwToolInfoApi()
//     }

//     //업로드할 파일 세팅
//     handleFileInput(type, e){
//         var id = e.target.id
//         if(type ==='file'){
//             $('#imagefile').val(e.target.files[0].name)
//         }else if(type ==='file2'){
//             $('#imagefile2').val(e.target.files[0].name)
//         }else if(type ==='manual'){
//             $('#manualfile').val(e.target.files[0].name)
//         }
//         this.setState({
//           selectedFile : e.target.files[0],
//         })

//         if(type ==='manual'){
//             setTimeout(function() {
//                 this.handlePostMenual(type, id ,e)
//             }.bind(this),1
//             );
//         }else{
//             setTimeout(function() {
//                 this.handlePostImage(type, id ,e)
//             }.bind(this),1
//             );
//         }
//     }

//     //메뉴얼 업로드
//     handlePostMenual(type, id, e){
//         const formData = new FormData();
//         formData.append('file', this.state.selectedFile);
    
//         return axios.post("https://jsonplaceholder.typicode.com/users", formData).then(res => {
//             try {

//                 this.state.menualName = res.data.filename
                
//                 $('#upload_menual').prepend('<input id="is_MenualName" type="hidden" name="is_MenualName" value="'+this.state.menualName+'"}/>')
//             } catch (error) {
//                 alert('작업중 오류가 발생하였습니다.')
//             }
//         }).catch(error => {
//             alert('작업중 오류가 발생하였습니다.')
//         })
//     }    

//     //이미지 업로드
//     handlePostImage(type, id, e){
//         const formData = new FormData();
//         formData.append('file', this.state.selectedFile);
    
//         return axios.post("https://jsonplaceholder.typicode.com/users", formData).then(res => {
//             try {
//                 setTimeout(function() {
//                     if(type ==='file'){
//                         this.state.file = '/image/'+res.data.filename
//                         this.state.fileName = res.data.filename
//                         $('#upload_img').prepend('<img id="uploadimg" src="'+this.state.file+'"/>')
//                         $('#upload_img').prepend('<input id="is_MainImg" type="hidden" name="is_MainImg" value="'+this.state.fileName+'"}/>')
                        
//                     }else if(type ==='file2'){
//                         this.state.file2 = '/image/'+res.data.filename
//                         this.state.fileName2 = res.data.filename
//                         $('#upload_img2').prepend('<img id="uploadimg2" src="'+this.state.file2+'"/>')
//                         $('#upload_img2').prepend('<input id="is_LabelImg" type="hidden" name="is_LabelImg" value="'+this.state.fileName2+'"}/>')
//                     }
//                 }.bind(this),1000
//                 );

//             } catch (error) {
//                 alert('작업중 오류가 발생하였습니다.')            
//             }
//         }).catch(error => {
//             alert('작업중 오류가 발생하였습니다.')            
//         })
//     }


//     // SW Tool 정보 호출
//     callSwToolInfoApi = async () => {
//         this.setState({ append_SwtoolInfo: this.SwToolInfoAppend() });
//     }

//     // SW Tool 정보 append
//     SwToolInfoAppend = () => {
//         let result = []
//             result.push(
//                 <table class="table_ty1">
//                     <tr>
//                         <th>
//                             <label for="is_Swt_toolname">툴 이름<span class="red">(*)</span></label>
//                         </th>
//                         <td>
//                             <input type="text" name="is_Swt_toolname" id="is_Swt_toolname" class="" />
//                         </td>
//                     </tr>
//                     <tr>
//                         <th>
//                             <label for="is_Swt_demo_site">데모 URL<span class="red">(*)</span></label>
//                         </th>
//                         <td>
//                             <input type="text" name="is_Swt_demo_site" id="is_Swt_demo_site" class="" />
//                         </td>
//                     </tr>
//                     <tr>
//                         <th>
//                             <label for="is_Giturl">Github URL<span class="red">(*)</span></label>
//                         </th>
//                         <td>
//                             <input type="text" name="is_Giturl" id="is_Giturl" class="" />
//                         </td>
//                     </tr>
//                     <tr>
//                         <th>
//                             <label for="is_Comments">설명<span class="red">(*)</span></label>
//                         </th>
//                         <td>
//                             <textarea name="is_Comments" id="is_Comments" rows="" cols=""></textarea>
//                         </td>
//                     </tr>
//                     <tr class="div_tb_tr fileb">
//                         <th>
//                             메뉴얼 파일 #1
//                         </th>
//                         <td class="fileBox fileBox_w1">
//                             <label for="uploadBtn1" class="btn_file">파일선택</label>
//                             <input type="text" id="manualfile" class="fileName fileName1" readonly="readonly" placeholder="선택된 파일 없음"/>
//                             <input type="file" id="uploadBtn1" class="uploadBtn uploadBtn1" onChange={e => this.handleFileInput('manual',e)}/>	
//                             <div id="upload_menual">
//                             </div>
//                         </td>
//                     </tr>
//                     <tr>
//                         <th>
//                             메인 이미지
//                         </th>
//                         <td className="fileBox fileBox1">
//                             <label htmlFor='imageSelect' className="btn_file">파일선택</label>
//                             <input type="text" id="imagefile" className="fileName fileName1" readOnly="readonly" placeholder="선택된 파일 없음"/>
//                             <input type="file" id="imageSelect" className="uploadBtn uploadBtn1" onChange={e => this.handleFileInput('file',e)}/>
//                             <div id="upload_img">
//                             </div>
//                         </td>
//                     </tr>
//                     <tr>
//                         <th>
//                             라벨 이미지
//                         </th>
//                         <td className="fileBox fileBox2">
//                             <label htmlFor='imageSelect2' className="btn_file">파일선택</label>
//                             <input type="text" id="imagefile2" className="fileName fileName1" readOnly="readonly" placeholder="선택된 파일 없음"/>
//                             <input type="file" id="imageSelect2" className="uploadBtn uploadBtn1" onChange={e => this.handleFileInput('file2',e)}/>
//                             <div id="upload_img2">
//                             </div>
//                         </td>
//                     </tr>
//                     <tr>
//                         <th>
//                             <label for="is_Swt_function">상세 기능<span class="red">(*)</span></label>
//                         </th>
//                         <td>
//                             <textarea name="is_Swt_function" id="is_Swt_function" rows="" cols=""></textarea>
//                         </td>
//                     </tr>
//                 </table>
//             )
//         return result
//     }

//     // 저장 버튼 클릭시 validate check
//     submitClick = async (type, e) => {

//         this.Swt_toolname_checker = $('#is_Swt_toolname').val();
//         this.Swt_demo_site_checker = $('#is_Swt_demo_site').val();
//         this.Giturl_checker = $('#is_Giturl').val();
//         this.Comments_checker = $('#is_Comments').val();
//         this.Swt_function_checker = $('#is_Swt_function').val();

//         this.fnValidate = (e) => {

//             // ## Swt_toolname check start 
//             if(this.Swt_toolname_checker === '') {
//                 $('#is_Swt_toolname').addClass('border_validate_err');
//                 alert('툴 이름을 다시 확인해주세요.')
//                 return false;
//             }
//             $('#is_Swt_toolname').removeClass('border_validate_err');

//             // ## Swt_demo_site check start 
//             if(this.Swt_demo_site_checker === '') {
//                 $('#is_Swt_demo_site').addClass('border_validate_err');
//                 alert('데모 URL을 다시 확인해주세요.')
//                 return false;
//             }
//             $('#is_Swt_demo_site').removeClass('border_validate_err');

//             // ## Giturl check start 
//             if(this.Giturl_checker === '') {
//                 $('#is_Giturl').addClass('border_validate_err');
//                 alert('Github URL을 다시 확인해주세요.')
//                 return false;
//             }
//             $('#is_Giturl').removeClass('border_validate_err');

//             // ## Comments check start 
//             if(this.Comments_checker === '') {
//                 $('#is_Comments').addClass('border_validate_err');
//                 alert('설명을 다시 확인해주세요.')
//                 return false;
//             }
//             $('#is_Comments').removeClass('border_validate_err');

//             // ## Swt_function check start 
//             if(this.Swt_function_checker === '') {
//                 $('#is_Swt_function').addClass('border_validate_err');
//                 alert('상세기능을 다시 확인해주세요.')
//                 return false;
//             }
//             $('#is_Swt_function').removeClass('border_validate_err');

//             var date = new Date()
//             var y_str = date.getFullYear().toString();

//             var month = date.getMonth()+1
//             var m_str = month.toString();

//             var day = date.getDate()
//             var d_str = day.toString();

//             var hour = date.getHours()
//             var min = date.getMinutes()
//             var sec = date.getSeconds()

//             // 프로젝트 코드생성
//             this.state.swtcode = 'USW'+y_str+m_str+d_str+hour+min+sec
            
//             $('#is_Swtcode').val(this.state.swtcode)

//             return true;
//         }

//         //유효성 체크
//         if(this.fnValidate()){
//             //software Tools 저장
//             //form type To Json
//             var jsonstr = $("form[name='frm']").serialize();
//             //특수문자 깨짐 해결
//             jsonstr = decodeURIComponent(jsonstr);
//             var Json_form = JSON.stringify(jsonstr).replace(/\"/gi,'')
//             Json_form = "{\"" +Json_form.replace(/\&/g,'\",\"').replace(/=/gi,'\":"')+"\"}";
        
//             try {
//                 const response = await fetch('/api/Swtool?type='+type, {
//                     method: 'POST',
//                     headers: {
//                     'Content-Type': 'application/json',
//                     },
//                     //한글 디코딩
//                     body: Json_form,
//                 });
//                 const body = await response.text();
//                 if(body == "succ"){
//                     if(type == 'save'){
//                         alert('Software Tools 등록이 완료되었습니다.')
//                     }else if(type == "modify"){
//                         alert('DSoftware Tools 수정이 완료되었습니다.')
//                     }
//                     // 저장 후 리스트페이지로 이동
//                     window.location.href = 'http://localhost:3000/AdminSoftwareList';
//                 }else{
//                     alert('작업중 오류가 발생하였습니다.')
//                 }  
//             } catch (error) {
//                 alert('작업중 오류가 발생하였습니다.')
//             }
//         }//fnValidate end
//     };

//     render () {
//         return (
//             <section class="sub_wrap">
//                 <article class="s_cnt mp_pro_li ct1">
//                     <div class="li_top">
//                         <h2 class="s_tit1">Software Tools 등록/수정</h2>
//                     </div>
//                     <div class="bo_w re1_wrap re1_wrap_writer">
//                         <form name="frm" id="frm" action="" onsubmit="" method="post" >
//                             <input id="is_Email" type="hidden" name="is_Email" value={this.state.admin_userid} />
//                             <input id="is_Swtcode" type="hidden" name="is_Swtcode" value={this.state.swtcode} />
//                             <input id="is_beforeSwtcode" type="hidden" name="is_beforeSwtcode" value={this.state.before_swtcode} />
                            
//                             <article class="res_w">
//                                 <p class="ment" style={{"text-align": "right"}}>
//                                     <span class="red">(*)</span>표시는 필수입력사항 입니다.
//                                 </p>
//                                 <div class="tb_outline">
//                                     {this.state.append_SwtoolInfo}

//                                     <div class="btn_confirm mt20" style={{"margin-bottom": "44px"}}>
//                                         <Link to={'/AdminSoftwareList'} className="bt_ty bt_ty1 cancel_ty1">취소</Link>
//                                         <a href="javascript:" className="bt_ty bt_ty2 submit_ty1 saveclass" onClick={(e) => this.submitClick('save', e)}>저장</a>
//                                         <a href="javascript:" className="bt_ty bt_ty2 submit_ty1 modifyclass" onClick={(e) => this.submitClick('modify', e)}>수정</a>
//                                     </div>

//                                 </div>
//                             </article>
//                         </form>	
//                     </div> 
//                 </article>
//             </section>
//         );
//     }
// }

// export default SoftwareView;