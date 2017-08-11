var sql = "INSERT INTO cdr (caller,caller_reverse,called,called_reverse,caller_domain,called_domain,callername,callername_reverse,sipcallerip,sipcalledip,sipcallerport,sipcalledport,duration,progress_time,first_rtp_time,connect_duration,a_last_rtp_from_end,b_last_rtp_from_end,calldate,callend,sighup,lastSIPresponseNum,response_time_100,response_time_xxx,bye,whohanged,a_index,a_received,a_lost,a_packet_loss_perc_mult1000,a_avgjitter_mult10,a_maxjitter,a_payload,a_sl1,a_sl2,a_sl3,a_sl4,a_sl5,a_sl6,a_sl7,a_sl8,a_sl9,a_sl10,ad50,a_d70,a_d90,a_d120,a_d150,a_d200,a_d300,a_delay_sum,a_delay_cnt,a_delay_avg_mult100,a_saddr,a_mos_f1_mult10,a_mos_f1_min_mult10,a_mos_f2_mult10,a_mos_f2_min_mult10,a_mos_adapt_mult10,a_mos_adapt_min_mult10,a_mos_min_mult10,b_rtcp_loss,b_rtcp_maxfr,b_rtcp_avgfr_mult10,b_rtcp_maxjitter,b_rtcp_avgjitter_mult10,b_rtcp_fraclost_pktcount,a_rtp_ptime,b_index,b_received,b_lost,b_packet_loss_perc_mult1000,b_avgjitter_mult10,b_maxjitter,b_payload,b_sl1,b_sl2,b_sl3,b_sl4,b_sl5,b_sl6,b_sl7,b_sl8,b_sl9,b_sl10,b_d50,b_d70,b_d90,b_d120,b_d150,b_d200,b_d300,b_delay_sum,b_delay_cnt,b_delay_avg_mult100,b_saddr,b_mos_f1_mult10,b_mos_f1_min_mult10,b_mos_f2_mult10,b_mos_f2_min_mult10,b_mos_adapt_mult10,b_mos_adapt_min_mult10,b_mos_min_mult10,a_rtcp_loss,a_rtcp_maxfr,a_rtcp_avgfr_mult10,a_rtcp_maxjitter,a_rtcp_avgjitter_mult10,a_rtcp_fraclost_pktcount,b_rtp_ptime,payload,jitter_mult10,mos_min_mult10,packet_loss_perc_mult1000,delay_sum,delay_cnt,delay_avg_mult100,rtcp_avgfr_mult10,rtcp_avgjitter_mult10,ost,dscp,lastSIPresponse_id,a_ua_id ) VALUES ( \'345123124\',\'421321543\',\'9999\',\'9999\',\'170.79.127.21\',\'170.79.127.21\',\'345123124\',\'421321543\',\'3381356316\',\'2857336597\',\'61575\',\'5060\',\'4\',\'0\',\'0\',\'4\',\'0\',\'0\',\'2017-08-10 13:48:57\',\'2017-08-10 13:49:01\',\'0\',\'200\',\'64.000000\',\'0.000000\',\'3\',\'caller\',\'0\',\'205\',\'0\',\'0\',\'5\',\'2\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'3381356316\',\'45\',\'45\',\'45\',\'45\',\'45\',\'45\',\'45\',\'65536\',\'1\',\'5\',\'0\',\'3\',\'1\',\'20\',\'1\',\'205\',\'0\',\'0\',\'1\',\'1\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'2857336597\',\'45\',\'45\',\'45\',\'45\',\'45\',\'45\',\'45\',\'65536\',\'0\',\'0\',\'0\',\'5\',\'0\',\'20\',\'0\',\'5\',\'45\',\'0\',\'0\',\'0\',\'0\',\'5\',\'8\',\'0\',\'0\',\'dsadas\',\'dsad\' )";
var parse = require('node-sqlparser').parse;
var stringify = require('node-sqlparser').stringify;
var astObj = parse(sql);

console.log(astObj);
var sqlstr = stringify(astObj);

console.log('----------------------------');
console.log(astObj.columns);
console.log('----------------------------');
console.log(astObj.values[0].value);
