import LinuxDistro from '../classes/LinuxDistro'

const util = require('util');
let { exec } = require('child_process');
exec = util.promisify(exec);

export let wsl = async () => {
  const { error, stdout, stderr } = await exec('wsl -l -v', {
    encoding: 'hex',
    shell: 'powershell'
  });

  if (error) {
    return 'No linux installation found'
  }

  let stdoutUTF8 = Buffer.from(stdout.replace(new RegExp("(00)+", "g"), ''), 'hex').toString('utf8');
  let output: LinuxDistro[] = []
  stdoutUTF8.trim().split('\n').forEach(string => {
    let row = string.trim().split(' ').filter(e => e.replace('*', ''))
    let name: string = row[0]
    let status: string = row[1]
    let version: number = parseInt(row[2])
    output.push(new LinuxDistro(name, version, status))
  })

  return output;
}