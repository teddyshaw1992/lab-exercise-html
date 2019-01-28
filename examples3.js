var courselabsteps='>>LAB 1 - Configure License Master\n\
>>LBDESC:In this exercise, you will perform basic discovery tasks to learn about your lab environment and bring up a Splunk License Master. Throughout the lab activities, you will use the Splunk CLI for configuration tasks and Splunk Web for monitoring and verification tasks.\n\
>>Task 1: Access your designated Splunk environment\n\
ssh <user>@<dns>\n\
pwd\n\
ls\n\
cd\n\
>>Task 2: Set up password-less SSH connection to IDX-Cluster and SH-Cluster.\n\
ssh-keygen -t rsa -P ""\n\
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys\n\
chmod 600 ~/.ssh/authorized_keys\n\
scp -r ~/.ssh 10.0.x.1:~/\n\
scp -r ~/.ssh 10.0.x.2:~/\n\
ssh 10.0.x.1\n\
>>DESC:[os_user@ip-10-0-x-1 ~]$\n';