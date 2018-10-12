

window.host='http://192.168.1.76:8080';

var form = null

layui.use(['layer', 'form', 'element'], function(){
  var layer = layui.layer
  ,form = layui.form
  ,element = layui.element
 
  //……
  //你的代码都应该写在这里面
  element.init();
   form.render();
});





/************************接口********************/
//登录
var login =host+"/login_bg/login";

//阿里云删除 图片、文件
var ossDel = host+'/file_bg/deleteOSSFile';

//删除 产品文档
var proDocumentDel =host+'/products_bg/deleteDocument';
//删除 场景文档
var projrammeDocumentDel = host+'/solution_bg/deleteDocument';

//未读消息统计
var msgNum = host +'/info_bg/count';


//产品1级目录  
//类别 下拉
var productSel1 = host+'/products_bg/queryProductTypeLevel1';
//表格
var productTable1 = host+'/products_bg/pageCategory';
//类别 添加
var productType1Add = host+'/products_bg/addProductTypeLever1';
//类别 删除
var productType1Del = host+'/products_bg/deleteProductTypeLever1';
//类别 查看
var productType1See = host+'/products_bg/queryCategory';
//类别 编辑
var productType1Edit = host+'/products_bg/updateProductTypeLever1';

//产品2级目录  类别 下拉
var productSel2 = host+'/products_bg/queryProductTypeLevel2';
//表格
var productTable2 = host+'/products_bg/pageType';
//类型 删除
var productType2Del = host+'/products_bg/deleteProductTypeLever2';
//类型 添加
var productType2Add = host+'/products_bg/addProductTypeLever2';

//类型 查看
var productType2See = host+'/products_bg/queryType';
//类型 编辑
var productType2Edit = host+'/products_bg/updateProductTypeLever2';

//产品   
//表格
var productTable = host+"/products_bg/queryProductList";
//添加
var productAdd = host+'/products_bg/addProduct';
//查看
var productSee = host+'/products_bg/queryById';
//编辑
var productEdit = host+'/products_bg/updateProduct';
//删除
var productDel = host+'/products_bg/deleteProduct';
//树型 菜单
var productTree = host+'/products_bg/treeProducts'





//方案
//类型管理
//类型 下拉
var programmeSel = host+'/solution_bg/list';
//方案管理 类型 表格
var programmeTypeTable = host +'/solution_bg/pageSolution';

//方案管理 类型 添加
var programmeTypeAdd =  host +'/solution_bg/addSolution';
//方案管理 类型 查看
var programmeTypeSee = host +'/solution_bg/querySolution';
//方案管理 类型 编辑
var programmeTypeEdit = host +'/solution_bg/updateSolution';
//方案管理 类型 删除
var programmeTypeDel = host +'/solution_bg/deleteSolution';

//场景管理
//表格
var programmeTable = host +'/solution_bg/pageApplication';
//添加
var programmeAdd = host+'/solution_bg/addApplication';
// 查看
var programmeSee = host +'/solution_bg/applicationDetail';
//编辑
var programmeEdit = host +'/solution_bg/updateApplication';
//删除
var programmeDel = host +'/solution_bg/deleteApplication';



//案例维护
//表格
var casesTable = host +'/case_bg/pageCase';

//添加
var casesAdd = host+'/case_bg/addCase';
// 查看
var casesSee = host +'/case_bg/detailCase';
//编辑
var casesEdit = host +'/case_bg/updateCase';
//删除
var casesDel = host +'/case_bg/deleteCase';


//案例类型
//下拉
var casesTypeSel = host+'/case_bg/typeList';
//表格
var casesTypeTable = host+'/case_bg/pageType';
//类型 添加
var casesTypeAdd = host+'/case_bg/addCaseType';
//类型 查看
var casesTypeSee = host +'/case_bg/detailType';
//类型 编辑
var casesTypeEdit = host +'/case_bg/updateCaseType';
//类型 删除
var casesTypeDel = host +'/case_bg/deleteCaseType';



//订单
//表格
var orderTable = host+'/order_bg/pagerLogisticsInformation';
//添加
var orderAdd = host+'/order_bg/bindLogisticsInformation';
//查看
var orderSee = host+'/order_bg/detaliLogisticsInformation';
//编辑
var orderEdit = host+'/order_bg/updateLogisticsInformation';
//删除
var orderDel = host+'/order_bg/deleteLogisticsInformation';


//技术分享
//表格
var skillTable = host+'/skill_bg/pageSkill';
//添加
var skillAdd = host+'/skill_bg/addSkill';
//查看
var skillSee = host+'/skill_bg/querySkill';
//编辑
var skillEdit = host+'/skill_bg/updateSkill';
//删除
var skillDel = host+'/skill_bg/deleteSkill';

//技术分享 类型
//表格
var skillTypeTable = host+'/skill_bg/pageType';
//类型下拉
var skillTypeSel = host+'/skill_bg/typeList';
//类型添加
var skillTypeAdd = host+'/skill_bg/addType';
//类型查看
var skillTypeSee = host+'/skill_bg/detaliType';
//类型编辑
var skillTypeEdit = host+'/skill_bg/updateType';
//类型删除
var skillTypeDel = host+'/skill_bg/deleteType';


//新闻
//表格
var newsTable = host+'/news_bg/pageNews';
//添加
var newsAdd = host+'/news_bg/addNew';
//查看
var newsSee = host+'/news_bg/queryNew';
//编辑
var newsEdit = host+'/news_bg/updateNew';
//删除
var newsDel = host+'/news_bg/deleteNew';

//新闻 类型
//类型 表格
var newsTypeTable = host+'/news_bg/pageType';
//类型下拉
var newsTypeSel = host+'/news_bg/typeList';
//类型添加
var newsTypeAdd = host+'/news_bg/addType';
//类型查看
var newsTypeSee = host+'/news_bg/detaliType';
//类型编辑
var newsTypeEdit = host+'/news_bg/updateType';
//类型删除
var newsTypeDel = host+'/news_bg/deleteType';

//招聘管理
//表格
var joinUsTable = host+'/news_bg/pageJoinus';
//添加
var joinUsAdd = host+'/news_bg/addJoinUs';
//查看
var joinUsSee = host+'/news_bg/joinusDetail';
//编辑
var joinUsEdit = host+'/news_bg/updateJoinUs';
//删除
var joinUsDel = host+'/news_bg/deleteJoinUs';

//客户信息
//客户表格
var userTable = host+'/usr_bg/pageGuest';
//客户 查看
var userSee = host+'/usr_bg/queryUser';

//服务咨询
//表格
var zixunTable =host+'/usr_bg/queryConsult';
//咨询查看
var zixunSee =host+'/info_bg/queryConsult';
 //咨询 删除
 var zixunDel = host+'/info_bg/deleteConsult';

// 咨询/维修/合作 表单 已读  1 2 3
var isRead = host+'/info_bg/setIsRead';
//咨询状态 编辑
var zixunStatusEdit = host +'/solution_bg/updateStatus';

//维修
//表格
var weixiuTable = host+'/usr_bg/queryMaintenance';
//删除
var weixiuDel = host +'/info_bg/deleteMaintenance';
//查看
var weixiuSee = host + '/info_bg/queryMaintenance';
//编辑  维修状态
var weixiuStatusEdit = host +'/usr_bg/updateStatus';


//消息中心

//服务咨询
//表格
var zixunAllTable =host+'/info_bg/pageConsult';

//维修
//表格
var weixiuAllTable = host+'/info_bg/pageMaintenance';

//合作
//表格
var cooperateTable = host+'/info_bg/queryCooperate';
//编辑 合作状态
var cooperateStatusEdit =host+'/case_bg/updateStatus';
//查看
var cooperateSee = host+'/case_bg/partnerDetail';
//删除
var cooperateDel = host+'/info_bg/deleteCooperate';





/*1级 下拉*/
function Sel1(type){
	var url = '';
	if(type == 1){   	/*产品类别下拉*/
	 	url = productSel1;
	}
	if(type == 2){		/*方案类型 下拉*/
		url = programmeSel
	}
	if(type == 3){
		url = casesTypeSel  /*成功案例 类型  下拉*/
	}
	if(type == 4){
		url = skillTypeSel /*技术分享  类型 下拉*/
	}
	if(type == 5){
		url = newsTypeSel /*新闻类型 下拉*/
	}
	
	$.ajax({
		type:"post",
		url:url,
		async:true,
		success:function(res){
			console.log('下拉列表',res)
			if(res.code == 0){
				var pro1='';
//				for (let item of res.records) {
//					pro1+=`<option value="${item.id}">${item.typeName}</option>`
//				}
				for(var i=0; i<res.records.length; i++){
						if(!res.records[i].typeName){
							pro1+='<option value='+res.records[i].id+'>'+res.records[i].name+'</option>'
						}else{
							pro1+='<option value='+res.records[i].id+'>'+res.records[i].typeName+'</option>'
						}
						
					
				}
				$('.pro1').html('<option value=""></option>'+pro1)
			}
		}
	});
}
/*2级 下拉*/
/*产品类型下拉*/
function Sel2(type,id,cb){
	var url = '';
	if(type == 1){   	/*产品类别下拉*/
	 	url = 	productSel2;
	}
	if(type == 2){		/*方案类型 下拉*/
		
	}
	$.ajax({
			type:"post",
			url:url,
			async:true,
			data:{
				type1Id:id
			},
			success:function(res){
				if(res.code == 0){
					var pro2='';
					for(var i=0; i<res.records.length; i++){
						pro2+='<option value='+res.records[i].id+'>'+res.records[i].typeName+'</option>'
					}
					$('.pro2').html('<option value="">请选择</option>'+pro2);
					form = layui.form
					form.render();
					if(cb!=null){
						cb();
					}
				}
			}
	})
}