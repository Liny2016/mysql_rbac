module.exports = {
    rbac: {
        'rbac_type': 1, //验证类型（1：登录验证， 2：时时验证) *可选 默认为1
        'user_key': 'uid', //用户认证识别号 *可选 默认为uid
        'role': 'role', //角色表名称 *可选 默认为role
        'node': 'node', //权限表名称 *可选 默认为node
        'user': 'user', //用户表名称 *可选 默认为user
        'userTrole': 'role_id', //在用户表储存角色表id的字段 *可选 默认为role_id
        'roleTnode': 'node_id', //在角色表储存权限表id的字段  *可选 默认为node_id 
        'nodeTroute': 'route', //在权限表储存判断权限路由的字段  *可选 默认为route 
        'nodeTmethod': 'method', //在权限表储存判断权限路由方法的字段  *可选 默认为method ,
        'userName': 'username', //用户表的用户名字段  *可选 默认为username ,
        'superUser': '' //用户表的用户名，该用户拥有最高权限 *可选 默认为空
    },
    mysql: {
        'host': '127.0.0.1', //IP/域名 *可选 默认为127.0.0.1
        'user': 'root', //数据库账号 *可选 默认为root
        'password': 'root', //数据库密码 *可选 默认为root
        'database': 'mysql_rbac', //数据库库名 *可选 默认为mysq_rbac
        'port': 3306 // 端口 *可选 默认为3306
    },
    hook: {
        // 在req参数挂载权限状态 如： req.is_root  *可选 默认为is_root
        root: 'is_root',
        // 在session参数挂载权限, 区分是否（1：登录验证， 2：时时验证) 状态 如： req.session.rbac_route  *可选 默认为rbac_route
        rbac_route: 'rbac_route'
    }
}