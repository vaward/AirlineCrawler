

      function cargar_vuelos() {                               
        // Nos aseguramos que tenemos datos para visualizar
        
           
            v_cod  = '1';
            v_pri  = '1';
            v_tray = '';
            v_recom = '0;'; 
            v_canal = '3';            
            v_tax  = parseFloat('72,73'.replace(',','.'));
            v_est  = '0';
            v_rut  = 'ALCMADBJZ';            
            parent.numerovuelo_i['1'] = new Array();
            
              v_codtra = '0';
              v_preua = parseFloat('171'.replace(',','.'));
              v_preuc = parseFloat('0'.replace(',','.'));
              v_preui = parseFloat('0'.replace(',','.'));
              v_paxadl = 1;
              v_paxchd = 0;
              v_paxinf = 0;
              v_sfee = parseFloat('0'.replace(',','.'));
              // importes residentes
              v_preua_r = parseFloat(''.replace(',','.'));
              v_preuc_r = parseFloat(''.replace(',','.'));
              v_preui_r = parseFloat(''.replace(',','.'));
              v_sfee_r = parseFloat('0'.replace(',','.'));
              // divisa
              v_coddiv = 'USD';
            
              parent.infovuelos_i = new Array(6);
              v_fecsal = '300920141230';
              v_horsal = v_fecsal.substr(8,2)+':'+v_fecsal.substr(10,2);
              v_fecsal = v_fecsal.substr(0,2)+'/'+v_fecsal.substr(2,2)+'/'+v_fecsal.substr(4,4);
              v_fecvta = '300920141400';
              v_horvta = v_fecvta.substr(8,2)+':'+v_fecvta.substr(10,2);
              v_fecvta = v_fecvta.substr(0,2)+'/'+v_fecvta.substr(2,2)+'/'+v_fecvta.substr(4,4);
              v_origen = 'ALC';
              v_destino = 'MAD';
              v_codida = 'ALC';
              v_codvta = 'MAD';
              v_num ='4048';
              v_cia ='UX';
              v_ope ='SWIFTAIR'
              //
              parent.infovuelos_i['id'] = v_cia+v_num;
              parent.infovuelos_i['origen']=v_origen;
              parent.infovuelos_i['destino']=v_destino;
              parent.infovuelos_i['fechasalida']=v_fecsal;
              parent.infovuelos_i['horasalida']=v_horsal;
              parent.infovuelos_i['fechallegada']=v_fecvta;
              parent.infovuelos_i['horallegada']=v_horvta;
              parent.infovuelos_i['base_a']=v_preua;
              parent.infovuelos_i['base_c']=v_preuc;
              parent.infovuelos_i['base_i']=v_preui;
              parent.infovuelos_i['numadl']=v_paxadl;
              parent.infovuelos_i['numchd']=v_paxchd;
              parent.infovuelos_i['numinf']=v_paxinf;
              parent.infovuelos_i['tasas']=v_tax;
              parent.infovuelos_i['sfee']=v_sfee;
              parent.infovuelos_i['codtra']=v_codtra;
              parent.infovuelos_i['base_a_r']=v_preua_r;
              parent.infovuelos_i['base_c_r']=v_preuc_r;
              parent.infovuelos_i['base_i_r']=v_preui_r;
              parent.infovuelos_i['sfee_r']=v_sfee_r;
              parent.infovuelos_i['pri']=v_pri;
              parent.infovuelos_i['est']=v_est;
              parent.infovuelos_i['trayectos']=v_tray;
              parent.infovuelos_i['recom']=v_recom;            
              parent.infovuelos_i['canal']=v_canal;
              parent.infovuelos_i['rut']=v_rut;
              parent.infovuelos_i['ope']=v_ope;
              parent.infovuelos_i['coddiv']=v_coddiv;  
              parent.numerovuelo_i[v_cod]['1'] = parent.infovuelos_i;
            
              parent.infovuelos_i = new Array(6);
              v_fecsal = '300920141735';
              v_horsal = v_fecsal.substr(8,2)+':'+v_fecsal.substr(10,2);
              v_fecsal = v_fecsal.substr(0,2)+'/'+v_fecsal.substr(2,2)+'/'+v_fecsal.substr(4,4);
              v_fecvta = '300920141850';
              v_horvta = v_fecvta.substr(8,2)+':'+v_fecvta.substr(10,2);
              v_fecvta = v_fecvta.substr(0,2)+'/'+v_fecvta.substr(2,2)+'/'+v_fecvta.substr(4,4);
              v_origen = 'MAD';
              v_destino = 'BJZ';
              v_codida = 'MAD';
              v_codvta = 'BJZ';
              v_num ='5441';
              v_cia ='UX';
              v_ope ='SWIFTAIR'
              //
              parent.infovuelos_i['id'] = v_cia+v_num;
              parent.infovuelos_i['origen']=v_origen;
              parent.infovuelos_i['destino']=v_destino;
              parent.infovuelos_i['fechasalida']=v_fecsal;
              parent.infovuelos_i['horasalida']=v_horsal;
              parent.infovuelos_i['fechallegada']=v_fecvta;
              parent.infovuelos_i['horallegada']=v_horvta;
              parent.infovuelos_i['base_a']=v_preua;
              parent.infovuelos_i['base_c']=v_preuc;
              parent.infovuelos_i['base_i']=v_preui;
              parent.infovuelos_i['numadl']=v_paxadl;
              parent.infovuelos_i['numchd']=v_paxchd;
              parent.infovuelos_i['numinf']=v_paxinf;
              parent.infovuelos_i['tasas']=v_tax;
              parent.infovuelos_i['sfee']=v_sfee;
              parent.infovuelos_i['codtra']=v_codtra;
              parent.infovuelos_i['base_a_r']=v_preua_r;
              parent.infovuelos_i['base_c_r']=v_preuc_r;
              parent.infovuelos_i['base_i_r']=v_preui_r;
              parent.infovuelos_i['sfee_r']=v_sfee_r;
              parent.infovuelos_i['pri']=v_pri;
              parent.infovuelos_i['est']=v_est;
              parent.infovuelos_i['trayectos']=v_tray;
              parent.infovuelos_i['recom']=v_recom;            
              parent.infovuelos_i['canal']=v_canal;
              parent.infovuelos_i['rut']=v_rut;
              parent.infovuelos_i['ope']=v_ope;
              parent.infovuelos_i['coddiv']=v_coddiv;  
              parent.numerovuelo_i[v_cod]['2'] = parent.infovuelos_i;
              
            v_cod  = '2';
            v_pri  = '2';
            v_tray = '';
            v_recom = '1;'; 
            v_canal = '3';            
            v_tax  = parseFloat('46,19'.replace(',','.'));
            v_est  = '0';
            v_rut  = 'ALCPMIMADBJZ';            
            parent.numerovuelo_i['2'] = new Array();
            
              v_codtra = '1';
              v_preua = parseFloat('261'.replace(',','.'));
              v_preuc = parseFloat('0'.replace(',','.'));
              v_preui = parseFloat('0'.replace(',','.'));
              v_paxadl = 1;
              v_paxchd = 0;
              v_paxinf = 0;
              v_sfee = parseFloat('0'.replace(',','.'));
              // importes residentes
              v_preua_r = parseFloat(''.replace(',','.'));
              v_preuc_r = parseFloat(''.replace(',','.'));
              v_preui_r = parseFloat(''.replace(',','.'));
              v_sfee_r = parseFloat('0'.replace(',','.'));
              // divisa
              v_coddiv = 'USD';
            
              parent.infovuelos_i = new Array(6);
              v_fecsal = '300920140850';
              v_horsal = v_fecsal.substr(8,2)+':'+v_fecsal.substr(10,2);
              v_fecsal = v_fecsal.substr(0,2)+'/'+v_fecsal.substr(2,2)+'/'+v_fecsal.substr(4,4);
              v_fecvta = '300920141010';
              v_horvta = v_fecvta.substr(8,2)+':'+v_fecvta.substr(10,2);
              v_fecvta = v_fecvta.substr(0,2)+'/'+v_fecvta.substr(2,2)+'/'+v_fecvta.substr(4,4);
              v_origen = 'ALC';
              v_destino = 'PMI';
              v_codida = 'ALC';
              v_codvta = 'PMI';
              v_num ='4025';
              v_cia ='UX';
              v_ope ='SWIFTAIR'
              //
              parent.infovuelos_i['id'] = v_cia+v_num;
              parent.infovuelos_i['origen']=v_origen;
              parent.infovuelos_i['destino']=v_destino;
              parent.infovuelos_i['fechasalida']=v_fecsal;
              parent.infovuelos_i['horasalida']=v_horsal;
              parent.infovuelos_i['fechallegada']=v_fecvta;
              parent.infovuelos_i['horallegada']=v_horvta;
              parent.infovuelos_i['base_a']=v_preua;
              parent.infovuelos_i['base_c']=v_preuc;
              parent.infovuelos_i['base_i']=v_preui;
              parent.infovuelos_i['numadl']=v_paxadl;
              parent.infovuelos_i['numchd']=v_paxchd;
              parent.infovuelos_i['numinf']=v_paxinf;
              parent.infovuelos_i['tasas']=v_tax;
              parent.infovuelos_i['sfee']=v_sfee;
              parent.infovuelos_i['codtra']=v_codtra;
              parent.infovuelos_i['base_a_r']=v_preua_r;
              parent.infovuelos_i['base_c_r']=v_preuc_r;
              parent.infovuelos_i['base_i_r']=v_preui_r;
              parent.infovuelos_i['sfee_r']=v_sfee_r;
              parent.infovuelos_i['pri']=v_pri;
              parent.infovuelos_i['est']=v_est;
              parent.infovuelos_i['trayectos']=v_tray;
              parent.infovuelos_i['recom']=v_recom;            
              parent.infovuelos_i['canal']=v_canal;
              parent.infovuelos_i['rut']=v_rut;
              parent.infovuelos_i['ope']=v_ope;
              parent.infovuelos_i['coddiv']=v_coddiv;  
              parent.numerovuelo_i[v_cod]['1'] = parent.infovuelos_i;
            
              parent.infovuelos_i = new Array(6);
              v_fecsal = '300920141230';
              v_horsal = v_fecsal.substr(8,2)+':'+v_fecsal.substr(10,2);
              v_fecsal = v_fecsal.substr(0,2)+'/'+v_fecsal.substr(2,2)+'/'+v_fecsal.substr(4,4);
              v_fecvta = '300920141355';
              v_horvta = v_fecvta.substr(8,2)+':'+v_fecvta.substr(10,2);
              v_fecvta = v_fecvta.substr(0,2)+'/'+v_fecvta.substr(2,2)+'/'+v_fecvta.substr(4,4);
              v_origen = 'PMI';
              v_destino = 'MAD';
              v_codida = 'PMI';
              v_codvta = 'MAD';
              v_num ='6048';
              v_cia ='UX';
              v_ope ='0'
              //
              parent.infovuelos_i['id'] = v_cia+v_num;
              parent.infovuelos_i['origen']=v_origen;
              parent.infovuelos_i['destino']=v_destino;
              parent.infovuelos_i['fechasalida']=v_fecsal;
              parent.infovuelos_i['horasalida']=v_horsal;
              parent.infovuelos_i['fechallegada']=v_fecvta;
              parent.infovuelos_i['horallegada']=v_horvta;
              parent.infovuelos_i['base_a']=v_preua;
              parent.infovuelos_i['base_c']=v_preuc;
              parent.infovuelos_i['base_i']=v_preui;
              parent.infovuelos_i['numadl']=v_paxadl;
              parent.infovuelos_i['numchd']=v_paxchd;
              parent.infovuelos_i['numinf']=v_paxinf;
              parent.infovuelos_i['tasas']=v_tax;
              parent.infovuelos_i['sfee']=v_sfee;
              parent.infovuelos_i['codtra']=v_codtra;
              parent.infovuelos_i['base_a_r']=v_preua_r;
              parent.infovuelos_i['base_c_r']=v_preuc_r;
              parent.infovuelos_i['base_i_r']=v_preui_r;
              parent.infovuelos_i['sfee_r']=v_sfee_r;
              parent.infovuelos_i['pri']=v_pri;
              parent.infovuelos_i['est']=v_est;
              parent.infovuelos_i['trayectos']=v_tray;
              parent.infovuelos_i['recom']=v_recom;            
              parent.infovuelos_i['canal']=v_canal;
              parent.infovuelos_i['rut']=v_rut;
              parent.infovuelos_i['ope']=v_ope;
              parent.infovuelos_i['coddiv']=v_coddiv;  
              parent.numerovuelo_i[v_cod]['2'] = parent.infovuelos_i;
            
              parent.infovuelos_i = new Array(6);
              v_fecsal = '300920141735';
              v_horsal = v_fecsal.substr(8,2)+':'+v_fecsal.substr(10,2);
              v_fecsal = v_fecsal.substr(0,2)+'/'+v_fecsal.substr(2,2)+'/'+v_fecsal.substr(4,4);
              v_fecvta = '300920141850';
              v_horvta = v_fecvta.substr(8,2)+':'+v_fecvta.substr(10,2);
              v_fecvta = v_fecvta.substr(0,2)+'/'+v_fecvta.substr(2,2)+'/'+v_fecvta.substr(4,4);
              v_origen = 'MAD';
              v_destino = 'BJZ';
              v_codida = 'MAD';
              v_codvta = 'BJZ';
              v_num ='5441';
              v_cia ='UX';
              v_ope ='SWIFTAIR'
              //
              parent.infovuelos_i['id'] = v_cia+v_num;
              parent.infovuelos_i['origen']=v_origen;
              parent.infovuelos_i['destino']=v_destino;
              parent.infovuelos_i['fechasalida']=v_fecsal;
              parent.infovuelos_i['horasalida']=v_horsal;
              parent.infovuelos_i['fechallegada']=v_fecvta;
              parent.infovuelos_i['horallegada']=v_horvta;
              parent.infovuelos_i['base_a']=v_preua;
              parent.infovuelos_i['base_c']=v_preuc;
              parent.infovuelos_i['base_i']=v_preui;
              parent.infovuelos_i['numadl']=v_paxadl;
              parent.infovuelos_i['numchd']=v_paxchd;
              parent.infovuelos_i['numinf']=v_paxinf;
              parent.infovuelos_i['tasas']=v_tax;
              parent.infovuelos_i['sfee']=v_sfee;
              parent.infovuelos_i['codtra']=v_codtra;
              parent.infovuelos_i['base_a_r']=v_preua_r;
              parent.infovuelos_i['base_c_r']=v_preuc_r;
              parent.infovuelos_i['base_i_r']=v_preui_r;
              parent.infovuelos_i['sfee_r']=v_sfee_r;
              parent.infovuelos_i['pri']=v_pri;
              parent.infovuelos_i['est']=v_est;
              parent.infovuelos_i['trayectos']=v_tray;
              parent.infovuelos_i['recom']=v_recom;            
              parent.infovuelos_i['canal']=v_canal;
              parent.infovuelos_i['rut']=v_rut;
              parent.infovuelos_i['ope']=v_ope;
              parent.infovuelos_i['coddiv']=v_coddiv;  
              parent.numerovuelo_i[v_cod]['3'] = parent.infovuelos_i;
                    
          v_fecsal = v_fecida.substr(4,4)+v_fecida.substr(2,2)+v_fecida.substr(0,2);          
          parent.preciosvuelos_i[v_fecsal] = parent.numerovuelo_i;
        
        //Comprobamos si se ha seleccionado la vuelta
        
      }