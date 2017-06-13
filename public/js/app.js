// 
var navCmpConfig = [
	{
		text: '菜单1',
		child: [
			{
				text: '菜单1-1' 
			},
			{
				text: '菜单1-2' 
			},
		]
	},
	{
		text: '菜单2',
		child: [
			{
				text: '菜单2-1' 
			},
			{
				text: '菜单2-2' 
			},
		]
	},
	{
		text: '菜单3',
	}
]

// 
function menuGen(id){
	return {
		xtype: 'button',
		id: id,
		text: id,
		height: 40,
		width: 150,
		border: '0 0',
		padding: '0 0'
	}
}


// 
var NavCmp = Ext.define('NavCmp',{
	extend: 'Ext.panel.Panel',
	className: 'NavCmp',
	constructor: function (config) {
		// console.log(config,'config')
		// console.log(arguments,'arguments')
		var menuItems = new Array(3);
		var menuItemBtns = new Array(3);
		// console.log(menuItems)
         this.callParent(arguments); 
         // console.log(this)
         menuItems = NavCmp.resolveData(config.navCmpConfig);
         // console.log(menuItemBtns);
         menuItemBtns = NavCmp.createMenuBtn(menuItems);
         console.log(menuItemBtns)
         this.add(menuItemBtns)
         // this.add()
    },
    inheritMethod: function(){
     	console.log('inheritMethod')
    },
    statics: {
        staticsMethod: function () {
             console.log('staticsMethod')
        },
        resolveData: function(navCmpConfig){
         	var navCmpConfigLength = navCmpConfig.length;
         	var menuItems = Array.apply(this,/*new Array(navCmpConfigLength)*/{length:navCmpConfigLength}).map(function(){
         		return [];
         	});
         	// console.log(new Array(navCmpConfigLength))
         	// console.log(Array.apply(this,/*new Array(navCmpConfigLength)*/{length:navCmpConfigLength}))
         	// menuItems[0] = 'aa'
         	// console.log(menuItems)
         	for (var i = 0; i < navCmpConfigLength; i++) {
         		menuItems[i].push(navCmpConfig[i].text);
         		if(navCmpConfig[i].child){
         			var childLength = navCmpConfig[i].child.length;
         			for (var j = 0; j < childLength; j++) {
         				menuItems[i].push(navCmpConfig[i].child[j].text)
         			}
         		}
         	}
         	return menuItems;
         	// console.log(menuItems)
        },
        MenuBtnTpl: function(text){
        	return {
        		xtype: 'button',
				// id: id,
				text: text,
				height: 40,
				width: 150,
				border: '0 0',
				padding: '0 0'
        	}
        },
        createMenuBtn: function(menuItems){
        	var menuItemBtns = [];
        	for (var i = 0; i < menuItems.length; i++) {
        		menuItemBtns.push(this.MenuBtnTpl(menuItems[i][0]))
        	}
        	return menuItemBtns;
        	// console.log(menuItemBtns);
        }
    }
})

// 
var navCmpInit = function(){
	Ext.tip.QuickTipManager.init();
	var myNavCmp = Ext.create('NavCmp',{
		id:'myNavCmp',
		border: false,
		layout:'hbox',
		style:{
			border:'0 0',
			padding: '0',
			background: '#99D9EA'
		},
		bodyStyle: 'background: #99D9EA',
		height: 40,
		width: 1000,
		navCmpConfig: navCmpConfig,
		renderTo: 'mainpanel'
	});
	// myNavCmp.add([menuGen('menu1'),menuGen('menu2')])
	// console.log(myNavCmp);
	// myNavCmp.inheritMethod();
	// NavCmp.staticsMethod();
}

// 
Ext.onReady(navCmpInit);