function calculate_median(arr) {
  //请勿改动函数名
  	var temp=[];
	for(var i=0;i<arr.length;i++)
	{
		if((i+1)%2==0)
		{
			temp.push(arr[i]);
		}
	}
	var n=arr.length;
	var m=temp.length;
	if(m%2==1)
	{
		return temp[Math.floor(m/2)];
	}
	else{
		return (temp[m/2-1]+temp[m/2])/2;
	}
}

module.exports = calculate_median;
