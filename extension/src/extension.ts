import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const typescriptExtention = vscode.extensions.getExtension('vscode.typescript-language-features')
	if (typescriptExtention && !typescriptExtention.isActive) {
		return typescriptExtention.activate();
	}
}