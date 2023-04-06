mrowcount=datatable.GetSheet("Action1").GetRowCount

For i = 1 to mrowcount step 1 
  datatable.SetCurrentRow(i)
  If datatable("ModuleExc","Action1")="Y" Then
  
  	Modid=datatable("ModuleID","Action1")
  	'msgbox modid
  	tcrowcount=datatable.GetSheet("Action2").GetRowCount
  	
  	For j = 1 To tcrowcount Step 1
  		
  		datatable.SetCurrentRow(j)
  		If Modid=Datatable("ModuleID","Action2") and Datatable("TestCaseExc","Action2")="Y" Then
  		
  			testcaseid=datatable("TestCaseId","Action2")
  			
  			'msgbox testcaseid
  			
  			tsrowcount=datatable.GetSheet("Action3").GetRowCount
  			
  			For k = 1 To tsrowcount Step 1
  				datatable.SetCurrentRow(k)
  				
  				If testcaseid=datatable("TestCaseId","Action3") Then
  					keyword=datatable("Keyword","Action3")
  					'msgbox keyword
  					
  					Select case Keyword
  						Case "lh"
  						Call launch()
  						Case "ln"
  						Call login("john","hp")
  						Case "ce"
  						Call close()
  						Case "nr"
  						Call neworder()
  						Case "lnd"
  						
  						drowcount=datatable.GetSheet("Action4").GetRowCount
  						For l = 1 To drowcount Step 1
  							datatable.SetCurrentRow(l)
  							agentname=datatable("username","Action4")
  							password=datatable("password","Action4")
  							Call launch()
  							Call login(agentname,password)
  							Call close()
  						Next
  						
  					End Select
 @@ hightlight id_;_7996432_;_script infofile_;_ZIP::ssf12.xml_;_

  				End If
  			Next
  		End If
  	Next
  End If
	
Next

