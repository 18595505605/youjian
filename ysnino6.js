    $(document).ready(function () {
      document.oncontextmenu = function () {
        return false;
      }
      //document.onselectstart = function () {
       // return false;
     // }
      //document.oncopy = function () {
        //return false;
     // }
      document.onkeydown = function () {
        //f12
        if (window.event && window.event.keyCode == 123) {
          event.keyCode = 0;
          event.returnValue = false;

      //ѯ�ʿ�
      layer.confirm('<p>�����ʳ��ԣ����γɿա�</p><p>ü��������Ӣ�ۣ������L�ʷ������˵�������� </p><p>׳־�����磬��ȥ���١�</p><p>��������һ���̣�ʫ��������������´Ҵҡ�</p>', {
        btn: ['�Բ���','��ɽ���'] //��ť
      }, function(){
        layer.msg('<p>�һ���Ĳ����ĸ��ˣ��������ǻز�ȥ��������</p><p>ͻȻ������Լ�˵���Բ��𣬶Բ�����Ҳ�Ҳ���ԭ�����Լ��ˡ�</p>', {icon: 1});
      }, function(){
        layer.msg('��˵��ɽ��ޣ���˵����ཡ���', {
          time: 20000, //20s���Զ��ر�
          btn: ['���', '��']
        });
      });  

          return false;
        }
        //ctrl+u
        if (event.ctrlKey && window.event.keyCode == 85) {
          return false;
        }
        //ctrl+shift+i
        if ((event.ctrlKey) && (event.shiftKey) && (event.keyCode == 73)) {
          return false;
        }
        // Ctrl+S
        else if ((event.ctrlKey) && (event.keyCode == 83)) {
          return false;
        }
      };

    });